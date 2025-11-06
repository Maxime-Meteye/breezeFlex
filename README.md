# BreezeFlex  

##Presentation  

Breezeflex is a css framework taking inspiration from bootstrap.

##Features  
- 40kb
- Flexgrid positionning
- Grid positionning
- Themes
- Buttons
- Inputs
- Margins
- Paddings
- Shadows
- Breakpoints
- Borders

## Demo
You can see BreezeFlex in action [here](https://maxime-meteye.github.io/breezeFlex/)  
For now this page includes only a demonstration of some features. It will be changed to a full documentation at a later date.

## Customisation

Css only users can rewrite mostly the same variables Scss users can.
To do that just import your stylesheet after BreezeFlex.
Then rewrite root variables.

This would turn the background color of the primary theme white.
``
  :root{
    --r-primary-color:250;
    --g-primary-color:250;
    --b-primary-color:250;
  }
``
Scss users can override config variables by reassigning them inside src/breezeflex/user_options/user_options.scss
For instance declaring this inside user_options.scss :
``
  $themes : (
    "foo" #fff,
    "bar" #f00 #0f0
  )
``
Would make BreezeFlex generate two themes,  
one named foo deriving from the color #fff with border, hover, and active colors constratsting with it. It would also pick automatically whether black or white text to ensure readibility.
The second would be bar deriving from the color #f00 with border, hover, and active colors constratsting with it. But the text color would be #0f0.

In this situation. Breezeflex would generate the following classes :
- theme-foo
- theme-bar
- btn-foo
- btn-bar

Always keep in mind that for now customising through scss overrides breezeflex options. It doesn't add your parameters on top of the default.

## Notes
The project still needs some polishing : 
- Variables names could come of as repetitive
- The stylesheet could probably be lightened, for now 40kb is pretty heavy for what BreezeFlex brings to the table.
- Some QOL in regards to customisation would probably be appreciated. Particularly in regards of themes. For instance overriding border colors can only be done in css.

I made it not because I wanted the bootstrap or tailwind killer, but because I wanted to get a little bit more familiar with css and sass. Hence why the documentation is not included as part of the 1.0.0 release.
