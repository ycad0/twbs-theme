[![Build Status](https://travis-ci.org/gintonicweb/twbs-theme.svg)](https://travis-ci.org/gintonicweb/twbs-theme)

# bootstrap

GintonicCMS theme based on twbs/bootstrap

## Warning

this plugin is a work in progress

## Installation

Install the plugin using [composer](http://getcomposer.org). 

```
"gintonicweb/twbs-theme": "dev-master"
```

Load it in config/bootstrap.php

```
Plugin::load('TwbsTheme', ['bootstrap' => true]);
```

Add the following helpers to your `src\View\AppView`

```
public function initialize()
{
    $this->loadHelper('Html', ['className' => 'BootstrapUI.Html']);
    $this->loadHelper('Form', ['className' => 'BootstrapUI.Form']);
    $this->loadHelper('Flash', ['className' => 'BootstrapUI.Flash']);
    $this->loadHelper('Paginator', ['className' => 'BootstrapUI.Paginator']);
}
```
