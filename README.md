# Good for openshift sails js application

A Sails application good for Openshift SAAS.

Make sure to install the CLI for openshift along with your Redhat Openshift Credentials.

[Installing the OpenShift Client Tools](https://developers.openshift.com/managing-your-applications/client-tools.html)

Usage with web load balancer:

> rhc app-create <Your appname> https://raw.githubusercontent.com/icflorescu/openshift-cartridge-nodejs/master/metadata/manifest.yml --from-code=https://github.com/jdltechworks/os-sails.git -s

Login to ssh:

> rhc ssh <Your app-name>

> npm install -g sails

Restart your openshift application
