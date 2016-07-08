# Tox Website

## Usage

When cloning this repo, make sure you also clone all submodules. You can achieve that by using `--recursive`

```bash
git clone --recursive https://github.com/Tox/tox.chat
```

Make sure you have the following installed

| Name                                                         | Version used by the server                                 |
|--------------------------------------------------------------|------------------------------------------------------------|
| python                                                       | [2.7.9](https://packages.debian.org/jessie/python)         |
| [pelican](http://docs.getpelican.com/en/latest/install.html) | [3.4.0](https://packages.debian.org/jessie/python-pelican) |
| make                                                         | [4.0](https://packages.debian.org/jessie/make)             |

Edit templates and static assets at [`themes/website/`](themes/website/).

The templates are written in [Jinja2](http://jinja.pocoo.org/) template language, so [make sure you are familiar with it](http://jinja.pocoo.org/docs/dev/templates/).

All templates, except the ones starting with `_`, are turned into HTML files.

Generate HTML

```bash
make html
```

This will put HTML files into `public/` and static assets into `public/theme/`.

Run a simple web server that will automatically re-generate HTML whenever you change something

```bash
make devserver_start
make devserver_stop
```

## Contribution Guidelines

* Open a PR with changes you want to make for others to review, don't push them directly as all changes to master go live
* Website should be fully functional with JavaScript disabled
* JavaScript may be used only to enhance experience
* Don't make website pull assets from CDNs or other places, keep everything local
* Before working on fixing an issue, double check there is no ongoing fork fixing it
* When fixing an issue, post a comment saying that you are doing so, to save the confusion
* All images should be optimized for web: resonable resolution and size, stripped metadata, etc.
* Use tabs over spaces for HTML indentation

## FAQ

### I want to add translation for the website

The website doesn't have multilingual support at the moment, but it's planned to add it, so check again later!

### I want my client to be listed on your website

Since recently, we require clients to comply with [Tox Client Standard (TCS)](https://tox.gitbooks.io/tox-client-standard/content/index.html) to be added to our website. We don't enforce that for the clients that were added to the website before the requirement, but we expect them to get TCS compliant over time.

Once your client is TCS compliant, you can open an Issue/PR for the client addition.

Note that a client doesn't have to be TCS compliant to be added to our [Wiki](https://wiki.tox.chat/clients).
