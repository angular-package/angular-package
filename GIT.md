# GIT

GIT commit conventions with Semantic versioning.

## Commit

* [AngularJS Git Commit Message Conventions][0]
* [Karma Git Commit Msg](1)

## Versioning

[Semantic Versioning 2.0.0][2]

**Given a version number MAJOR.MINOR.PATCH, increment the:**

* MAJOR version when you make incompatible API changes,
* MINOR version when you add functionality in a backwards-compatible manner, and
* PATCH version when you make backwards-compatible bug fixes.

Additional labels for pre-release and build metadata are available as extensions to the MAJOR.MINOR.PATCH format.

**FAQ**
How should I deal with revisions in the 0.y.z initial development phase?
>The simplest thing to do is start your initial development release at 0.1.0 and then increment the minor version for each subsequent release.

How do I know when to release 1.0.0?

>If your software is being used in production, it should probably already be 1.0.0. If you have a stable API on which users have come to depend, you should be 1.0.0. If you’re worrying a lot about backwards compatibility, you should probably already be 1.0.0.

[0]: https://gist.github.com/stephenparish/9941e89d80e2bc58a153
[1]: http://karma-runner.github.io/0.10/dev/git-commit-msg.html
[2]: http://semver.org/
