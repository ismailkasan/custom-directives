
## Installation

Use npm to install the package

  ```terminal
  $ npm i custom-directives --save 
  ```

## Import

You must add into your module `imports` the `CustomDirectivesModule` in order to add all of the directives.

  ```typescript
  import {CustomDirectivesModule} from 'custom-directives';
  
  @NgModule({
   // ...
   imports: [
     // ...
     CustomDirectivesModule
   ]
  })
  ```

## How to use
You can use directives like below. 

* Only number

```html
With comma(,):
<input type="text" onlyNumber thousandSeperator="','" /> <!-- Output: "55,25" -->
Or With dot(.):
<input type="text" onlyNumber thousandSeperator="'.'" /> <!-- Output: "55.25" -->
```

* High Light

```html
<p [appHighlight]="'#58DB9E'" > test</p>
```

## Contributing

* Before adding any new feature or a fix make sure to open an issue first!

Make sure you have `angular-cli` installed globally.

```bash
$ npm install -g angular-cli
```

Clone the project, and install dependencies.

```bash
$ git clone https://github.com/ismailkasan/custom-directives.git
$ npm install
```

Create a new branch

```bash
$ git checkout -b feat/someFeature
```

 make sure everything is running properly

Commit & push, and make a pull request!
