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
* All images should be optimized for web: reasonable resolution and size, stripped metadata, etc.
* Use tabs over spaces for HTML indentation

## FAQ

### I want to add translation for the website

The website doesn't have multilingual support at the moment, but it's planned to add it, so check again later!

### I want my client to be listed on your website

Open an Issue/PR for the client addition.

It used to be required that clients comply with the [Tox Client Standard (TCS)](https://tox.gitbooks.io/tox-client-standard/content/index.html) in order to be added to the website.
While [it was decided not to require that anymore](https://github.com/Tox/tox.chat/issues/224), we still ask that you read through the TCS and try to comply at least with the security related points.

When submitting a request for client addition, keep in mind that we expect the clients we list to be of high quality.
It's not our intention to list every single Tox client in existence.
Rather, the intention is to provide a curated list of Tox clients.

If you don't think that your client is ready to be listed on the website but still want to list it somewhere, you could add it to the list of clients on the [wiki](https://wiki.tox.chat/clients) and the [TokTok website](https://toktok.ltd/integrations.html)([repo](https://github.com/TokTok/website)).
