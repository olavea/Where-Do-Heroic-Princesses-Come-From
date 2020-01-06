Welcome back to The Lilly Monthly 😺

Today we will start off with a message from Lillian Raae-Vea (5 🦄):

Mom told dad and me, "build me a bank card payment thingy on the POW! page. With Stripe. And you guys, make SURE it's properly encrypted."

Dad and me, we connected the Stripe API to the POW! page. Because Mom wanted us to "unlock" 🔓the stripe "window" with her test stripeKey 🔑

"Thank you Lillian and what do YOU think, should we ask our reader to do what we did?" I said.

"Good idea! But shouldn't you explain what it all means first?" Lillian said.

"No, I am sorry about not explaining first, but that would not be the Ola–Vea–way. Would it? No. Build first, learn later." I said.

Today's Tiny Tasks have two parts

Part One

Setting up a Gatsby site​ and adding the StripeJS plugin

1.
Take out your Lilly Building Note Book and your favorite pen or pencil. Open to a clean double page.
2.

Follow my instructions in 3 to 5 and you will build this pretend site in your pretend "terminal 💀":
                                       terminal 💀​
gatsby new pretend-site
​
​cd pretend-site​

​yarn add gatsby​-plugin-stripe




3.
Start in the top right corner and go x pinky nails to the left. Draw
a tiny skull 💀. And then write
​

4.

"terminal" to the left of the tiny skull 💀. And then on the next line far to the left write​:
​

5.

gatsby new pretend-site​​ . And then on the next line write:​



6.

cd pretend-site​​ . And then on the next line write: ​



7.

yarn add gatsby​-plugin-stripe​. And then on the next line write: ​



8.

terminal 💀​over and out



9.

Don't go find gatsby​-plugin-stripe on line 55 or something​ inside gatsby​-​config.js in the POW! code on github.com.



Today's Tiny Tasks


Part Two
Borrow Benedicte's test stripeKey 🔑​to "unlock" 🔓​the stripe window

10



13. You will build this ___ in your book

...

...{

    ...

      ...stripe = window.Stripe("pk_test_XiirziufElakjoOpyuyCrPfo")

      //                           stripeKey 🔑

    }

    ... redirectToCheckout(event) {

      ...

      const { ... } = ... ....stripe.redirectToCheckout({

        ...,

        successUrl: `https://www.usepow.app/HeisannHoppsannKarlson`

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


The Assassin, the future Queen and her undercover POW! Ladies
Chapter 1
Where Do Heroic Girls Come From?
Page 3


The older girls name is Pellæ. She had finished all her days tasks in the stable. So before she got bored she slipped the little grey pony out the stable backdoor without anyone seeing.

The "without anyone seeing" part was no accident. A dramatic distraction in the kitchens had everybody running towards the black smoke. Pellæ heard distressed voices getting distant as she looked over her shoulder at the castle kitchens disappearing behind a bend in the road. Soon, birdsong was all she could hear. Birdsong and "Clippety-clop."

"Just practicing my stagecraft," she whispered in the ear of the grey pony. "It's nothing personal against the kitchen staff you know. A girls gotta practice her REAL craft every day. How else can she tell who she REALLY is? Hm, Grey?" Pellæ gave the grey pony a green apple and stroked his neck feeling the muscles move. "Crunch. Munch. Munch." The Grey answered happily.

Up ahead in the golden fields she could see the little white library tower, with it's tiny red shed. Behind the tower, the winding road. Then the wide green forest and adventure.
To be continued.

Enjoy your day and remember Sunday is Funday! The Lilly Monthly​​ was written by:
Ola Vea & Lillian Raae-Vea | ReactJS & GatsbyJS Apprentices at:
Lilly Labs: a teeny-tiny IT-consultancy | 997 85 291


P.S.
Lillian's father looks up at Lillian from reading. She has been listening to him reading out loud and now she can tell he will ask one of his questions.
"Pellæ says, "A girls gotta practice her REAL craft,"which of the Crypto Laws does that remind you of?" He looks at Lillian with That Look.
"It reminds me of The Third Crypto​ Law." Lillian answers with confidence.
"Good. What then is The Third Crypto​ Law?" Asks her dad.
"Know Your Crypto Tools." Lillian Says.
"Right. Name one of your crypto tools?" Asks her dad.
"Stripe API." Says Lillian.
"Can you show me an example of how we have used the Stripe API in mom's POW! webapp?" Asked her dad.
"Yes dad, let's pretend the user is Lillebror and the button is on Karlson på Taket's tummy​. Look here in my book." Says Lillian.​



14. Lillebror clicks the button on Karlson på Taket​'s tummy and

the "event"​ 👍​ gets sent upwards inside the code...

      <button
​
// 14. Lillebror clicks the button on Karlson på Taket​'s tummy and​
​// the "event"​ 👍​ gets sent upwards inside the code...​

​        onClick={(event) => this.redirectToCheckout(event)}

​      >

​        Invest in POW! $54

​      </button>

15. ... snatching Benedicte's "stripeKey"​ 🔑 on the way...

almost at the top

...{

​    ...

​// 15. ... snatching Benedicte's stripeKey 🔑on the way...

​      ...stripe = window.Stripe("pk_test_XiirziufElakjoOpyuyCrPfo")

    }

​... redirectToCheckout(event) {

16. ... then Karlson på Taket's​ rotor starts up  🚁​

"rrrr – ​​RRR – ​​redirectToCheckout​"​

      ...stripe = window.Stripe("pk_test_XiirziufElakjoOpyuyCrPfo")

​    }

​// 16. ...then Karlson på Taket's​ rotor starts up 🚁​
​// "rrrr – ​​RRR – ​​redirectToCheckout​"

​    ... redirectToCheckout(event) {

​      ...

​      const { ... } = ... ....stripe.redirectToCheckout({

​        ...,

​        successUrl: `https://www.usepow.app/Lillebror​sOwnRoom​`

​        ...

​      })

​      if (...) {...("...:", ...)}

​    }

17. Lillebror gets picked up by Karlson på Taket​ and flown out the "unlocked" Stripe "window". 🕴️​

Together they fly,

to the Stripe API.
    ... redirectToCheckout(event) {

​      ...

​// 17. Lillebror gets picked up by Karlson på Taket​ and flown out the "unlocked" Stripe "window". 🕴️​​

​// Together they fly,

​​// to the Stripe API.
​
      const { ... } = ... ....stripe.redirectToCheckout({

​        ...,

​        successUrl: `https://www.usepow.app/Lillebror​sOwnRoom​`

​        ...

​      })

​      if (...) {...("...:", ...)}

​    }

18. Lillebror types in his bank card number and it gets properly encrypted by Stripe. (https://checkout.stripe.com/​)



19. Lillebror gets put safely back down again inside his own room by Karlson på Taket​.


​​    ... redirectToCheckout(event) {

​      ...

​      const { ... } = ... ....stripe.redirectToCheckout({

​        ...,

​// 19. Lillebror gets put safely back down again inside his own room by Karlson på Taket​.​

​        successUrl: `https://www.usepow.app/Lillebror​sOwnRoom​`

​        ...

​      })

​      if (...) {...("...:", ...)}

​    }
​
out😺😺
--

here on GitHub." Says Lillian.
[Yes dad, look here on GitHub](https://github.com/olavea/Where-Do-Heroic-Women-Come-From/blob/master/book/LinkText/2_grey_Stripe.md)
https://github.com/olavea/Where-Do-Heroic-Women-Come-From/blob/master/book/LinkText/2_grey_Stripe.md


"..."
--
LINK to Gatsby and stripe





"...might happen to YOU if YOU don't know your tools?" Asked her dad.

"If I don't know my tools PROPERLY it's easy for me to slip up while making a web app and let the wrong someone know my neighbours secret."

"Good. Good. Run and play now." Said her dad.

This has been the second email in chapter 1
Where Do Heroic Women Come From? Part 1 of
The Mask Itself, Book 1 of
The Third Law, series.
