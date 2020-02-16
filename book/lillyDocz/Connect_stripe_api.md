I will start off with a message from Lillian Raae-Vea (5 🦄):

Mom told dad and me, "build me a bank card payment thingy on the POW! page. With Stripe. And you guys, make SURE it's properly encrypted."

Dad and me, we connected the Stripe API to the POW! page. Because Mom wanted us to "unlock" 🔓the stripe "window" with her test stripeKey 🔑

This is what Dad told me to do:

You start with

Tiny Tasks Part One

Setting up a Gatsby site​ and adding the StripeJS plugin

1.
Take out your sketchNote Book and your favorite pen or pencil. Open to a clean double page.

2.

Copy this into your sketchNote book to make your pretend "terminal 💀":

                                       terminal 💀​
gatsby new pretend-site
​
​cd pretend-site​

​yarn add gatsby​-plugin-stripe

                                       terminal 💀​over and out



x.

Don't go find gatsby​-plugin-stripe on line 55 or something​ inside gatsby​-​config.js in the POW! code on github.com.



Tiny Tasks Part Two

Borrow Benedicte's test stripeKey 🔑​to "unlock" 🔓​the stripe window

1.
Copy this into your sketchNote book to make your pretend "VS Code":


                                       VS Code
...

...{

    ...

      ...stripe = window.Stripe("pk_test_XiirziufElakjoOpyuyCrPfo")

      //                         🔼 stripeKey 🔑   🔼

    }

    ... redirectToCheckout(event) {

      ...

      const { ... } = ... ....stripe.redirectToCheckout({

        ...,

        successUrl: `https://www.usepow.app/______`

        ...

      })

      if (...) {...("...:", ...)}

    }

    ...

     ...

      <button

        onClick={(event) => this.redirectToCheckout(event)}

      >

        Invest in POW! $54

      </button>

...
                                       VS Code 💀​over and out

A logline for the tiny tale about flying out the window

"OK Lizabeth, I know who you need now, The World's Most Reckless inventoress!" Said Ruby.

"Which Inventoress is THAT?" Asked Lizabeth with a sly, small smile and looked past Ruby out the large, locked window.

Ruby held up a gold key and unlocked the window while never looking away from Lizabeth's eyes. Lizabeth gasped:

"Oh MY! Where did you steal that gold key? You rude, rooftop, pirate you!"

Ruby just smiled and pushed the glittering pink big button on her belly. Behind her back four shiny, red rotors unfolded like a ladybugs shells and wings. Ruby's short, muscular arms embraced Lizabeth's waist. The red rotors said:

"rrr-RRR-rrredirrrect!" Together they floated elegantly up, then glided out the window , up over the rooftop, behind a triple chimney and landed softly on a tiny terrace. A terrace filled with flowers and buzzing with bees.