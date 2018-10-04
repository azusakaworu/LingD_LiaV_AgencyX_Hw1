# AgencyX_hW1

Two-person group project for protfolio website.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

sass npm gulp gitignore

```
npm install --save-dev gulp-watch-sass
```

### Installing

install node.js gulp

```
cnpm install gulp -g
```
built package.json


```
{
  "name": "test",
  "version": "1.0.0",  
  "description": "This is for study gulp project !",  
  "homepage": "",  
  "repository": {    
    "type": "git",
    "url": "https://git.oschina.net/xxxx"
  },
  "author": {    
    "name": "surging",
    "email": "surging2@qq.com"
  },
  "license": "ISC",    
  "devDependencies": {   
    "gulp": "^3.8.11",
    "gulp-less": "^3.0.0"
  }
}
```
And local gulp

```
cnpm install --save-dev
```

And built gulpfile.js 

```
var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass',function(){
    return gulp.src('./sass/*.scss')
    .pipe(sass({outputStyle:'compressed'}).on('error',sass.logError))
    .pipe(gulp.dest('./css'));
}

);

```
And install gulp-sass

```
npm install --save-dev gulp-watch-sass
```

And install gulp-serve

```
npm i --save-dev gulp-serve
```







## Built With

* [Dropwizard](http://www.dropwizard.io/1.0.2/docs/) - The web framework used
* [Maven](https://maven.apache.org/) - Dependency Management
* [ROME](https://rometools.github.io/rome/) - Used to generate RSS Feeds



## License

fanshawe.copyright


