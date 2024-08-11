# Redux에서 조건부 타입 추론 구현

**1. 조건문을 사용한 접근**

```typescript
interface Ex<Tdata> {
  data: Tdata | undefined;
  isSuccess: boolean;
}

const selectEx = createSelector(
  [(state: RootState) => state.ex],
  (ex: Ex<Tdata>) => {
    const { data, isSuccess } = ex;

    if (isSuccess) {
      return { data: data as string, isSuccess };
    }

    return { data, isSuccess };
  }
);

const { data, isSuccess } = selectEx(store.getState());

let temp = isSuccess ? data : "";
//typeof temp === string
```

- 함수 내에서 `isSuccess`에 따라 반환하는 `data`의 타입을 조건부로 처리
- TypeScript 컴파일러는 함수 내부에서 조건에 따라 반환되는 값들의 타입을 자동으로 추론하며, 이러한 추론은 유니온 타입으로 정의

```ts
// TypeScript 컴파일러가 자동으로 추론한 return 타입
const selectEx: (state: { ex: Ex<string> }) =>
  | {
      data: string;
      isSuccess: true;
    }
  | {
      data: string | undefined;
      isSuccess: false;
    };
```

**2. 유니온 타입을 사용한 접근**

```typescript
interface Success<Tdata> {
  data: Tdata;
  isSuccess: true;
}

interface Default {
  data: undefined;
  isSuccess: false;
}

type Ex<Tdata> = Success<Tdata> | Default;
```

- `isSuccess` 상태에 따라 `data`의 타입이 자동으로 추론
- `isSuccess`가 `true`일 때 `Success<Tdata>` 이므로 `data`의 타입은 `Tdata`
- `isSuccess`가 `false`일 때 `Default` 이므로 `data`의 타입은 `undefined`

#### 기타

- React Query에서는 유니온 타입을 사용
- https://github.com/TanStack/query/blob/main/packages/query-core/src/types.ts#L725C1-L751C46

```ts
export interface QueryObserverSuccessResult<
  TData = unknown,
  TError = DefaultError
> extends QueryObserverBaseResult<TData, TError> {
  data: TData;
  error: null;
  isError: false;
  isPending: false;
  isLoading: false;
  isLoadingError: false;
  isRefetchError: false;
  isSuccess: true;
  status: "success";
}

export type DefinedQueryObserverResult<
  TData = unknown,
  TError = DefaultError
> =
  | QueryObserverRefetchErrorResult<TData, TError>
  | QueryObserverSuccessResult<TData, TError>;

export type QueryObserverResult<TData = unknown, TError = DefaultError> =
  | DefinedQueryObserverResult<TData, TError>
  | QueryObserverLoadingErrorResult<TData, TError>
  | QueryObserverLoadingResult<TData, TError>
  | QueryObserverPendingResult<TData, TError>;
```
