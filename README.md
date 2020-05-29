# Frontity Social Previews

Frontity package to enable previews from Social Networks.

## Install

`npm i --save frontity-social-previews`

Then include the following object in your `frontity.settings.js`, inside `packages` list.

```
{
    name: 'frontity-social-previews',
    state: {
        socialPreviews: {
            siteLogo:
                'https://igmoweb.files.wordpress.com/2020/05/bug.png', // A fallback image when there is not featured image.
            twitter: {
                creator: 'igmoweb', // Your Twitter username without @
                site: 'igmowebcom', // If your site has its own Twitter account, the site account without @
            },
            facebook_id: {
                facebookAppId: '' // Your Facebook APP ID 
            }
        },
    },
},
```

## Facebook

Sharing Guide: [https://developers.facebook.com/tools/debug/](https://developers.facebook.com/tools/debug/)

Preview debugger: [https://developers.facebook.com/tools/debug/](https://developers.facebook.com/tools/debug/)

Looking for your Facebook App ID? [https://developers.facebook.com/apps/redirect/dashboard](https://developers.facebook.com/apps/redirect/dashboard)

## Twitter

Cards documentation: [https://developer.twitter.com/en/docs/tweets/optimize-with-cards/guides/getting-started](https://developer.twitter.com/en/docs/tweets/optimize-with-cards/guides/getting-started)

Cards validator: [https://cards-dev.twitter.com/validator](https://cards-dev.twitter.com/validator)


