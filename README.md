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

## Running the tests

npm install --save-dev gulp-watch-sass




## Built With

* [Dropwizard](http://www.dropwizard.io/1.0.2/docs/) - The web framework used
* [Maven](https://maven.apache.org/) - Dependency Management
* [ROME](https://rometools.github.io/rome/) - Used to generate RSS Feeds

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 

## Authors

* **Billie Thompson** - *Initial work* - [PurpleBooth](https://github.com/PurpleBooth)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

fanshawe.copyright


