# Locked WhatsApp

## The problem
I use WhatsApp Web on my work laptop, but the problem is I don't want to keep my WhatsApp signed in while I leave my laptop unattended for a short time.

Even if I lock my laptop, other co-workers know my laptop's password so the WhatsApp remains vulnerable.

Unchecking the 'keep me signed in' option works, but it gets tedious to re-scan WhatsApp's QR code every time after I haven't used the app in less than 3 minutes.

## The solution

I made this super-small Electron app which simply requires you to input a password before allowing you to access your WhatsApp. (The password is any password you choose upon first time installation)

#### Security...
To be honest, this is probably not very secure, and someone determined enough with the necessary knowledge and experience could probably find a way to break this, either by cleverly inserting JS code into the Electron process or maybe finding the cookie files Electron stores somewhere.

But for my needs, this is good enough.

## Usage / Features
Once you enter WhatsApp Web (either by first-time-use or login), you can relock the app at any time by pressing **Shift + Escape**.

The app will also automatically lock itself whenever the computer itself locks down.

## Plans for the future
###### (which may or may not actually happen, just ideas)
- Some extensions/upgrades to WhatsApp Web itself.
- Better styling for the first-time-use/login screens.
- A hovering button on top of the WhatsApp Web which locks the app

## Installation
Download the built release

## Build
1. Clone the repo
2. `npm install`
3. `npm start`

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)