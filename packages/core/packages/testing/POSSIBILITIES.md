# Possibilites

## Matchers

```typescript
be<TYPE>(actualOrExpected: Argument<TYPE>, expected?: TYPE, expectationFailOutput?: any): this
```

```typescript
contain<TYPE>(actualOrExpected: Argument<TYPE>, expected?: TYPE, expectationFailOutput?: any): this
```

```typescript
defined<TYPE>(actual?: Argument<TYPE>, expectationFailOutput?: any): this
```

```typescript
equal<TYPE>(actualOrExpected: Argument<TYPE>, expected?: TYPE, expectationFailOutput?: any): this
```

```typescript
falsy<TYPE = false>(actual?: Argument<TYPE>, expectationFailOutput?: any): this
```

```typescript
null<TYPE>(actual?: Argument<TYPE>, expectationFailOutput?: any): this
```

```typescript
truthy<TYPE = true>(actual?: Argument<TYPE>, expectationFailOutput?: any): this
```

```typescript
undefined<TYPE = undefined>(actual?: TYPE, expectationFailOutput?: any): this
```

## How it works

Each method executes

```typescript
private matcher<TYPE>(matcher: Matcher, argument: Argument<TYPE>, expected?: TYPE | null, expectationFailOutput?: any): this
```

> `matcher()` method is searching in `TestComponent` to find property value or return its string.

Example component

```typescript
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'test-component',
  templateUrl: './test.component.html'
})
export class TestComponent implements OnInit {
  firstname = 'Eve';
  surname = 'Eve';
  age = 127;
  active = false;
  removed = true;
  additional = null;
  additional_information = null;
  place = undefined;

  observable$: Observable<number>;

  data: {
    firstname: string,
    surname: string,
    age: number,
    active: boolean
  };

  constructor() {
    this.data = {
      firstname: this.firstname,
      surname: this.surname,
      age: this.age,
      active: this.active
    };
  }

  ngOnInit(): void { }
}

```

```typescript
expected !== undefined
```

```typescript
.be<string>('firstname', 'Eve')
.be<string>(['firstname', 'surname'], 'Eve')
```

```typescript
.contain<TYPE>('firstname', 'Eve')
.contain<TYPE>(['firstname', 'surname'], 'Eve')

.equal<TYPE>('firstname', 'Eve')
.equal<TYPE>(['firstname', 'surname'], 'Eve')
```

With use `before()` method:

```typescript
.before(component => component.firstname)
.be('Eve')
.before(component => component.surname)
.be('Eve')

.before(component => component.firstname)
.contain('Eve')
.before(component => component.surname)
.contain('Eve')
```