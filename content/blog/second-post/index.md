---
title: 'Loops for Absolute Beginners: A Mental Model'
author: 'Anthony Pogliano'
date: '2021-04-02'
slug: 'loops-for-absolute-beginners-a-mental-model'
---

## Why am I writing this?

When I started learning to code, learning how loops worked was one of the first truly challenging roadblocks I encountered. It was the first time I was required to learn a formalized mental model and not just syntax. I found a lot of resources that attempted to explain looping, but felt that many of the articles out there about what looping is and how it works are not written with the perspective of a true beginner in mind. There can be a lot of confusing focus on language-specific syntax, or poorly explained abstractions that might do well at showing you how a loop is implemented in the language you are learning or using, but not exactly what a loop is doing, what it's for, how it's actually working, when to use one, etc. I was frustrated by the resources I found that basically all told you _how_ to implement a loop in whatever language, but didn't discuss what was going on behind the scenes. If you are like me, tying things you are learning to existing knowledge is a super useful way to make things click.

## What this article will do:

I want this to be part of a series discussing loops that gives real-world examples of when loops are used. This first article will attempt to build a mental model for what looping is as a concept divorced from any particular programming language. I would go so far as to say that ANY beginner programmer knows what looping is intuitively, but perhaps not in the context of coding. I want this article to help bridge the gap between your innate knowledge of looping and how looping is implemented in code. My goal is to explain what looping is without relying on too much technical jargon so that the concept becomes a little more familiar. I'll offer some real-world examples of what I consider to be looping outside of a coding context. I'll discuss how we can make the looping we do frequently in our everyday lives look a little more like the looping that takes place in a program that we might write.

## Who this article is for:

I primarily write code in JavaScript and will gravitate towards that language as examples become more concrete and language-specific. If you are at the point in your studies where you are learning about looping, I assume familiarity with concepts like variables, functions, arrays, and objects. I endeavor to write this without the reader needing to be deeply familiar with any of those concepts in order to benefit from reading this article. However, if you are not sure what a function or a variable is (conceptually), it might be a better use of your time to gain some familiarity with those concepts before tackling looping.

## What is looping, then?

I would argue that looping is NOT specific to coding per se, but rather a general method for accomplishing repetitive tasks that is so useful (and commonplace) that any programming language will have a specific implementation for using looping to accomplish said repetitive tasks. In other words, whatever language you are writing code in, there will be a concrete way to implement a loop.

At the most general level, looping is a technique for getting stuff done. We use looping in real life whenever we are accomplishing _any_ repetitive task. This begs the question: what is a repeitive task? I think a really great example of a repetitive task would be filling and mailing envelopes. This is a task that we can go about accomplishing using a concrete set of steps that don't vary much from envelope to envelope.

What does this look like in the use case I've concocted? Well, to start you might gather all the materials you will need in one place. You might grab a box of envelopes, a stack of letters, a book of stamps, and a rubber stamp for putting the return address on the envelopes quickly. The process you use could take a few different forms, but ultimately you would do something like this:

- Step 1: Remove an envelope from the box of envelopes.
- Step 2: Fold a letter.
- Step 3: Place the letter in the envelope.
- Step 4: Seal the envelope.
- Step 5: Remove a stamp from your book of stamps and stick it on the envelope.
- Step 6: Address the envelope.
- Step 7: Take the sealed, addressed, stamped envelope and place it in an "outgoing mail" tray or pile.
- Step 8: ... Go back to step 1, repeat this entire process for the next envelope/letter until there are no longer any letters to mail.

In real life, we are likely a little more relaxed about the order in which we complete the steps above. We might stuff a few envelopes at a time before addressing them, stuff a few more, then affix the stamps on the envelopes at the very end of the procecss. There are many ways we could (and probably would) go about doing this if we were doing this "for real". Nonetheless, this is what looping looks like outside of coding.

Another example might be doing some prep work before cooking a big meal. For the sake of simplicity, lets say you have a lot of different vegetables you need to dice:

- Step 1: Grab one of the vegetables you're going to dice.
- Step 2: Cut the vegetable length-wise.
- Step 3: Cut the vegetable width-wise.
- Step 4: Scoop up the diced vegetable and put it in the container it will stay in until you use it.
- Step 5: ... Go back to step 1, repeat until all the vegetables are diced.

The point is that you can apply this sort of logic to a lot of different things that you do every day. Sure, you might not follow the EXACT same process for every _iteration_ of a repetitive task but it's very likely that you use a general form of looping any time you have to accomplish any task that requires a few distinct steps to complete. The difference between our intuitive approach to tasks like this in real life and in coding is that in coding we have to formalize our approach and repeat the steps that comprise the task in the same order for every iteration of the task at hand.

To try and bridge the gap a little bit between our real-world examples and how you might formalize the same sort of logic in code, I want to write out our envelope example using some pseudo-code. For now, let's not worry about using a specific syntax, or how many letters we have to mail, although these sorts of constraints are central to looping in code. Instead let's focus on breaking our task down into distinct _sub-tasks_, and think about how we will determine if we are going to keep going through the loop, or if we are going to stop stuffing envelopes and go do something else:

```
FOR each letter that needs to be sent:
  remove envelope from box of envelopes
  THEN fold a letter
  THEN place letter in envelope
  THEN seal the envelope
  THEN attach stamp to envelope
  THEN address the envelope
  THEN place envelope in outbox
  CHECK if another letter needs to be sent and
    IF another letter needs to be sent, repeat steps 1 - 8
    ELSE you are done with your task
```

As you can see in the example above, the focus is on the distinct sub-tasks that comprise our task. Breaking our main task down into smaller part is a central way to make our loops more intuitive to read and write. We also account for how we know when we will stop looping and move on to some other task - namely, at the end of the loop we check if we need to send another letter, and if we do we repeat all our steps. If we do not need to send another letter, our loop is finished and we can move on to something else. Still... we could be more explicit about specifying when we stop sending letters. We might choose to stop when we've sent a certain number of letters, or when some other arbitrary condition is met.

Say we need to send 10 letters. Say also that we are the kind of person who easily zones out when we are doing boring, repetitive tasks and so we need to be given explicit instructions about when to stop mailing letters, and we need to be constantly aware of how many letters we've mailed so that we don't send too many or too few letters. As it turns out, these sorts of considerations are key to using loops in code. In code, if we fail to specify some _stop condition_, a loop will continue running, over and over again until the heat death of the universe or we run out of memory, whichever comes first. In the example we've been using, the stop condition would be: when we have mailed 10 letters. We can adjust our pseudo-code a little bit to reflect this constraint:

```
Number Of Letters That Need To Be Sent: 10

Number Of Letters Sent So Far: x

FOR each letter that needs to be sent:
  check how many letters have been sent so far
    IF Number of Letters Sent So Far is less than 10:
      remove envelope from box of envelopes
      THEN fold a letter
      THEN place letter in envelope
      THEN seal the envelope
      THEN attach stamp to envelope
      THEN address the envelope
      THEN place envelope in outbox
      INCREASE the Number of Letters Sent by 1
      REPEAT (from the IF statement above)
    ELSE-IF Number of Letters Sent So Far is 10:
      STOP sending letters
```

There are some subtle differences in the pseudo-code above that differentiates it from the previous example(s). Namely, the example above explicitly accounts for the number of times we have to repeat the tasks that comprise the loop. Whether or not you continue to mail envelopes is dependent on how many you've already mailed. Once you've mailed some number of envelopes (10 envelopes in the example above), you will move on to some other task. Conceptually, this is known as a _loop counter_, and it does just what we did above: counts the number of times we've executed all the sub-tasks that comprise our loop. In both code and "real life" examples, this gives us a concrete way to identify how much work we've done, and when to stop doing work. We also introduced some semblance of a _control structure_ in the form of the `IF` and `ELSE-IF` sections in the pseudo-code. Control structures allow us to do things based on specific _conditions_ we are anticipating during the execution of the loop. In this case, the condition we were monitoring was the number of envelopes we have sent.

The main thing we are aiming for when moving from our intuitive, everyday approach to looping to looping with code is that we need to be much more explicit about the steps that comprise the loop itself and the order in which those steps occur. When we are looping using code, we are constrained to some degree by the syntax/formal implementation of the loop in the language we are using. As such we need to think a little more carefully about how our task will look when broken into its constituent parts. We also need to be thoughtful about when we will stop executing our loop to keep from stuffing envelopes for the rest of our lives.

## Recap

You should have a good model forming in your mind of what looping is. I contend that looping is not specific to coding, but rather an approach to completing repetitive tasks that will always have a specific implementation in any coding language. That implementation will allow you to track certain _variables_ that can be used to indicate when we've achieved our desired goal. We can use _control structures_ to account for minor variations in the way we accomplish our task or when we stop looping. Things like _loop counters_ allow us to keep track of how many times we have executed the steps in our loop, and can help us know when to stop looping.

Before digging into some more technical examples, it might be good to think through a few real-world tasks that lend themselves to a "looping" approach, and spend some time writing out the order of the steps you would take to complete those tasks. Make sure to emphasize thinking about how to know when you are done with a task, or how you would account for minor variations in the sub-tasks that make up your main task.

## Further Reading

1.) [Looping code](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code) from Mozilla Developer Network - the gold standard for information on web development.

2.) Though [this example](https://www.dataquest.io/blog/python-for-loop-tutorial/) is in Python, it still discusses looping in a general way and the concepts discussed are applicable to any language.

3.) [This video](https://www.youtube.com/watch?v=eSYeHlwDCNA) from CodeCademy does basically what the article above was aiming for, but in video form.
