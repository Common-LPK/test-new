// FiberNode tag 속성
const FunctionComponent = 0;
const ClassComponent = 1;
const IndeterminateComponent = 2;
const HostRoot = 3;
const HostPortal = 4;
const HostComponent = 5;
const HostText = 6;
const Fragment = 7;
const Mode = 8;
const ContextConsumer = 9;
const ContextProvider = 10;
const ForwardRef = 11;
const Profiler = 12;
const SuspenseComponent = 13;
const MemoComponent = 14;
const SimpleMemoComponent = 15;
const LazyComponent = 16;
const IncompleteClassComponent = 17;
const DehydratedFragment = 18;
const SuspenseListComponent = 19;
// 21 없음
const ScopeComponent = 21;
const OffscreenComponent = 22;
const LegacyHiddenComponent = 23;
const CacheComponent = 24;

/*
Fiber는 React Element의 유형과 주요 속성을 공유한다.
그러나 React Element는 매번 다시 생성되지만, Fiber는 가능한 자주 재사용된다.
대부분의 Fiber는 초기 마운트 중에 생성된다.

Properties
child, sibling, return (Fiber relationships)
child: 자식 노드중 가장 첫번째 노드를 가리킨다.
sibling: 자신의 바로 다음 형제 노드를 가리킨다.
return: 부모 노드를 가리킨다.
alternate: 두 쌍의 트리를 서로 가리키며, 파이버가 재사용이 가능하게 해준다.

Fiber란 작업단위를 말한다.
Fiber는 두 단계로 진행되며 render phase는 비동기, commit phase는 동기식으로 처리된다.
여기서 작업이란
1. 상태의 변경
2. 생명주기함수의 호출
3. DOM의 변경
작업은 바로 처리하거나 예약을 할 수 있다.
작업은 분할해서 조금씩 처리도 가능하다.

Fiber Tree
Fiber는 current Tree, workInProgress Tree 2가지를 갖고 있다.
current Tree는 현재 화면에 표시되는 것으로, 일관성 없는 UI와 모든 종류의 불편함을 초래할 수 있기 때문에 React가 트리를 변경할 수 없다.
대신 React는 workInProgress Tree를 변경하고 맨 끝에서 포인터를 간단히 바꾼다.
두 tree가 서로 바뀐다.

렌더링 단계에서 React는 모든 종류의 비동기 작업을 수행한다. 이는 사용자에게 보이지 않기 때문에 그렇게 할 수 있다.
렌더링 단계에서 작동하지만, 커밋단계에서도 많은 작업을 수행해야 한다.
렌더링 단계의 결과물은 Fiber tree뿐만 아니라 이펙트 목록도 표시된다.

여기서 이펙트란, DOM을 변경하거나 특정 생명주기 메서드를 호출하는 것과 같은 활동이다.
이런 활동은 side-effect라고 불리며 다른 컴포넌트에 영향을 줄 수 있어 렌더링중에는 실행할 수 없다.
이펙트도 작업의 한 유형이며 이러한 유형의 작업은 Fiber에 크게 의존한다.
div와 같은 호스트 컴포넌트에 대한 이펙트는 DOM에서 요소를 추가, 수정, 제거할 수 있다.

이펙트 적용 방법
커밋 단계에서 리액트는 모든 이펙트를 검증하고 컴포넌트 인스턴스에 적용한다.
그 결과 사용자에게 변경사항이 표시되며 동기화되어야 한다.
리액트는 이 모든것을 한번에 처리한다.
렌더링의 핵심은 어떤 노드를 추가, 수정, 제거할지 또는 어떤 컴포넌트에 생명주기 메서드를 호출해야하는지 결정하는 것이다.

*/
