---
title: 'Loops for Absolute Beginners: A Mental Model'
author: 'Anthony Pogliano'
date: '2021-04-02'
slug: 'loops-for-absolute-beginners-a-mental-model'
---

## Why am I writing this?

When I started learning to code, learning how loops worked was one of the first truly challenging roadblocks I encountered. I found a lot of resources that attempted to explain looping, but I feel that many of the articles out there about what looping is and how it works are not written with the perspective of a true beginner in mind. There can be a lot of confusing focus on language-specific syntax, or poorly explained abstractions that might do well at showing you how a loop is implemented in the language you are learning or using, but not exactly what a loop is doing, what it's for, etc.

## What this article will do:

I want this to be part of a series discussing loops that gives real-world examples of when loops are used. This first article will attempt to build a mental model for what looping is as a concept, divorced from any particular programming language. I would go so far as to say that ANY beginner programmer knows what looping is intuitively, but perhaps not in the context of coding. I want this article to help bridge the gap between your innate knowledge of "looping" and how "looping" is implemented in code. My goal is to explain what looping is without relying on too much technical jargon so that the concept becomes a little more familiar. I'll offer some real-world examples of what I consider to be "looping" outside of a coding context. I'll discuss how we can make the looping we do frequently in our everyday lives look a little more like the looping that takes place in a program that we might write.

## What is looping, then?

Looping is NOT specific to code per se, but within any programming language you write code in looping will have a clear and specific implementation. In other words, whatever language you are writing code in, there will be a concrete way to accomplish any repetitive task - i.e., looping. At the most general level, looping is a technique for getting stuff done. We use looping in real life whenever we are accomplishing _any_ repetitive task. I think a really great example of "looping IRL" would be filling and sending envelopes. This is a really repetitive task that we can go about accomplishing using a concrete set of steps that don't change much.

What does this look like in the use case I've concocted? Well, to start you might gather all the materials you will need in one place. You might grab a box of envelopes, a stack of letters, a book of stamps, and a rubber stamp for addressing the envelopes quickly. The process you use could take a few different forms, but ultimately you would do something like this:

- Step 1: Remove an envelope from the box of envelopes.
- Step 2: Fold a letter.
- Step 3: Place the letter in the envelope.
- Step 4: Seal the envelope.
- Step 5: Remove a stamp from your book of stamps and stick it on the envelope.
- Step 6: Take your rubber stamp and use it to address the envelope.
- Step 7: Take the sealed, addressed, stamped envelope and place it in an "outgoing mail" tray.
- Step 8: ... Go back to step 1, repeat this entire process for the next envelope/letter until there are no longer any letters to mail.

This is looping in real life. Another example might be doing some prep work before cooking a big meal. For the sake of simplicity, lets say you have a lot of different vegetables you need to dice:

- Step 1: Grab one of the vegetables you're going to dice.
- Step 2: Cut the vegetable length-wise.
- Step 3: Cut the vegetable width-wise.
- Step 4: Scoop up the diced vegetable and put it in the container it will stay in until you use it.
- Step 5: ... Go back to step 1, repeat until all the vegetables you need diced are diced.

The point is, you can apply this sort of logic to a lot of different things that you do every day. Sure, you might not follow the EXACT same process for every _iteration_ of a repetitive task but it's very likely that you use a general form of looping any time you have to accomplish any task that requires a few distinct steps to complete.

To try and bridge the gap a little bit between our "real world" examples and how you might implement the same sort of logic in code, I want to write out our envelope example using some pseudo-code. For now, let's not worry about how many letters we have to handle, although this is often a real constraint in loops:

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
    IF another letter needs to be sent, repeat steps 1 - 9
    ELSE you are done with your task
```

When we are using code to loop, we are typically a little more explicit about how many times we are going to repeat the tasks necessary to achieve whatever goal we have. Returning to our "mailing letters" example, we likely have a concrete number of letters we need to send. Let's make our example a little more explicit.

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
      INCREASE the No. of Letters Sent by 1
      REPEAT
    ELSE-IF Number of Letters Sent So Far is 10:
      STOP sending letters
```

There are some subtle differences in the pseudo-code above that differentiate it from the previous example(s). Namely, the example above attempts to explicitly account for the number of times we have to repeat a set of tasks. Whether or not you continue to mail envelopes is dependent on how many you've already mailed. Once you've mailed some arbitrary number of envelopes, you will move on to some other task (presumably). Conceptually, this is known as a "loop counter", and it does just what we did above: counts the number of times we've executed a certain task. In both code and "real life" examples, this gives us a concrete way to identify how much work we've done, and when to stop doing work. We also introduced some semblance of a _control structure_ in the form of the `IF` and `ELSE-IF` sections in the pseudo-code. In particular, we introduced language indicating _conditions_ that determine what we will do – either continue stuffing envelopes, or stop and go do something else.

## Recap

If I've explained this well, you should have a good model forming in your mind of what looping is _in general_. To re-cap, looping is not specific to coding, but is instead an approach to completing repetitive tasks that will have a specific implementation in any coding language. That is to say, there will always be some specific way/ways to do some repetitive task in a given programming language. That implementation will allow you to track certain _variables_ that can be used to indicate when we've achieved our desired goal. In the example used here, the variable we were tracking was the number of envelopes mailed. Once we reached the desired number of envelopes prepped and mailed, we stopped "looping" and were free to move on to some other task. Before digging into some more technical examples, it might be good to think through a few "real world" tasks that lend themselves to a "looping" approach, and spend some time thinking about the order of the steps you would take to complete those tasks. Make sure to emphasize thinking about how to know when you are done with a task, or how you would account for minor variations in the sub-tasks that make up your main task.

## Further Reading

Here's a good article on what loops are, and how they work with a stronger emphasis on implementing them in code:

1) [Looping code](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code) from Mozilla Developer Network - the gold standard for information on web development.