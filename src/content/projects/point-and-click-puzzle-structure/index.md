---
title: Point and Click Puzzle Structure
date: 2025-12-09
description: ""
tags:
  - videogames
image: full-throttle-0.jpg
imageAlt: ""
imageOG: false
hideCoverImage: false
hideTOC: false
targetKeyword: ""
draft: false
---
## The structure of Full Throttle

During a recent playthrough of Full Throttle, I had an important realization about my game design approach. My puzzles had grown unnecessarily complex, with intricate logic that not only made development challenging but also raised questions about player enjoyment. Was I creating engaging experiences, or just convoluted obstacles?

So I took a moment to go back and study games of old and, while taking notes on Tim Schafer’s work in “Full Throttle,” I found that at least in some parts he follows a particular structure. I don’t know if it’s on purpose, or if his team used this all the time, but it helped me to understand how to write a compelling puzzle that moves the story forward.

This is the structure in question:

## Puzzle Structure:

1. **Setup**: The initial scene that presents the puzzle’s environment, key elements, and context.
2. **Objective**: A clear goal that the player needs to accomplish to progress.
3. **Obvious Plan**: The straightforward solution that would work in real life.
4. **Obstacle**: What prevents the obvious plan from working.
5. **Real puzzle revealed**: The actual challenge becomes clear – overcoming the specific obstacle.
6. **Hint**: A subtle clue pointing toward the correct solution.
7. **Bad Plan**: A logical but incorrect solution that players might try.
8. **Why it fails**: The logical reason why the bad plan doesn’t work.
9. **Good plan**: The creative solution that actually solves the puzzle.
10. **Success**: The satisfying outcome when the puzzle is solved correctly.

Let’s look at each element.

I will present examples from the second section of Full Throttle, where Maureen is helping Ben fix his motorcycle. You may want to refresh your memory by replaying that section.

### **Setup**:
![](full-throttle-1.jpg)

A situation is presented to the player, establishing the initial context and environment where the puzzle takes place. It introduces the key components, characters, or objects that will be relevant to solving the puzzle, while also setting the scene’s atmosphere and providing essential background information that frames the challenge ahead.

Basically, you are in _this_ place and _this_ is what this place has to offer.

Point and click adventure games are more than puzzle games. They are narrative experiences that move the plot forward through puzzles. Ideally, each puzzle is relevant to the plot. The setup is the situation that explains how this thing we’re doing is connected to the story.

1. **Example 1, Enter the gas station**: Early in the game, the player learns they need gas for their motorcycle. Upon reaching the gas station, they find an electric fence and a padlocked door. Through the barrier, they spot a tower with a gas tank mounted on top.
2. **Example 2, The gas tower**: The player needs gas for their motorcycle, and upon entering a heavily guarded gas station, they see a ladder that leads up to a gas tank atop a tower. If they look carefully, there’s also a place they can hide.
3. **Example 3, The trailer**: The player needs a blowtorch. Ben finds a trailer and through the window sees a guy using a torch.
4. **Example 4, The junkyard**: The player is looking for a motorcycle fork, and the junkyard is the logical place to find one. When they arrive, the junkyard is closed. However, there’s a chain that opens the main gate when pulled.

### **Objective**:

The character goal is clearly defined and communicated to the player, establishing what they need to accomplish or acquire to progress. This objective is the driving force behind the puzzle, giving players a clear sense direction.

The story should set a reasonable objective. Let’s say, the player needs to enter a room. The reason should be clear and make sense as part of the story (to talk to someone, for instance). But the objective is getting inside the room.

1. **Example 1, Enter the gas station**: Upon looking at the scene, the player character remarks that the tower contains gas, that he needed for the motorcycle. The tower stands on the other side of a barrier, so the objective becomes clear: find a way across the barrier to reach the gas.
2. **Example 2, The gas tower**: Once the player has found a way across the previous example’s barrier, they need to climb the ladder to the gas tank to obtain some gas.
3. **Example 3, The trailer**: The player needs to get the torch that the guy has.
4. **Example 4, The junkyard**: The player needs to enter the junkyard.

### **Obvious plan**:

The scene presents a clear, straightforward solution that players would naturally try first. This solution appears logical and simple, requiring minimal problem-solving within the game’s rules. It’s what would typically work in real life, making it the natural first choice for most players. When this obvious approach fails, it helps players better understand the puzzle’s complexity.

If the game had no obstacles, the player wouldn’t need to think too much to achieve their goal. Most of the time we can achieve our objectives in a straightforward way. If the player wants to enter a room, they just walk through the door. A simple and obvious way to acheave what they want.

1. **Example 1, Enter the gas station**: The scene features a door that leads directly to the tower area across the barrier. The obvious solution would be to simply open the door and walk through.
2. **Example 2, The gas tower**: To get gas from the fuel tank, the obvious solution is to climb the ladder that leads to it.
3. **Example 3, The trailer**: Enter the trailer and take the torch from the guy. Knocking on the front door, the guy comes to the door.
4. **Example 4, The junkyard**: Pull the chain to open the main gate and enter the junkyard.

### **Obstacle**:

When the player attempts the obvious solution, they encounter an obstacle that proves this straightforward approach won’t work. This obstacle reveals the true nature of the puzzle: how can you achieve your objective when the obvious solution is impossible?

Because this is a game with puzzles, and with story, we want obstacles. Conflict. The player should not get what they want that easily. We want to enter a room, but the door is locked. Now what will we do?

It’s worth mentioning that the obstacle should make sense in the context of the story. Why is the door locked? Maybe the person inside is afraid. If the obstacle feels contrived, the puzzle will as well.

1. **Example 1, Enter the gas station**: When attempting to open the door, the player discovers it’s secured with a padlock. To proceed, they must either find a way to unlock the padlock or find an alternative entrance.
2. **Example 2, The gas tower**: Upon touching the ladder, an alarm is triggered. Guards come on a flying vehicle. The character runs away as the guards shoot at him.
3. **Example 3, The trailer**: The guy with the torch comes to the door but he doesn’t open the door, staying safely inside his trailer, out of reach.
4. **Example 4, The junkyard**: To pass through the main gate, the character must walk toward it, but doing so requires letting go of the chain. When released, the gate closes instantly—far too quickly for anyone to sprint through.

### **Real Puzzle Revealed:**

The true puzzle isn’t about achieving the goal—it’s about overcoming the Obstacle. It’s only when we present the Obstacle that the player knows what they should solve. It’s not about opening a door—it’s about opening a particular door, which is locked in a particular way when the player has access to a particular set of tools. Unlocking a door is a different puzzle every time because each door puzzle has, or should have, a different obstacle.

When the obstacle is presented, the player expects that overcoming it will give them access to the Objective, and move the story forward.

1. **Example 1, Enter the gas station**: The real puzzle is: How do I open the door?
2. **Example 2, The gas tower**: How do I get pass the guards?
3. **Example 3, The trailer**: How do I get to the guy inside the trailer.
4. **Example 4, The junkyard**: How do I keep the door open.

### **Hint**:

![](full-throttle-2.jpg)

The obstacle appears alongside a clue that guides the player toward the correct solution. While showing what won’t work, the game subtly points players to where they should look to solve the puzzle.

I found that enjoyable puzzles don’t just say, “open the door.” They say, “I don’t know where the key is.” I believe that presenting a clue at the same time as presenting the puzzle helps the player arrive more easily to the correct path, instead of trying myriads of possibilities and getting frustrated as most won’t work.

1. **Example 1, Enter the gas station:** The character remarks they need to find a way to open the padlock. This comment directs players to focus on the padlock, suggesting that the solution requires interacting with it, instead of focusing on the eclectic fence.
2. **Example 2, The gas tower**: The flying vehicle has a motor (which means it has a gas tank).
3. **Example 3, The trailer**: The guy speaks through the door with his face pressed against the peephole, inadvertently positioning himself where a forcefully opened door would strike him. This happens in a cutscene, which metatextually tells the player to pay attention to the guy against the door.
4. **Example 4, The junkyard**: The chain goes all the way up the junkyard’s wall. And the chain’s motion is connected to the main gate’s motion.

### **Bad Plan**:

If we ignore the hint, there exists a logical and evident solution to deal with the obstacle and achieve the objective, thus solving the puzzle. It’s natural for the player to try this solution, as it seems to solve the problem sensibly. However, this plan doesn’t work.

There are things that make sense to try when facing a puzzle. If a door is locked, we might try breaking it down or knocking so someone inside lets us in. But if solutions were that straightforward, there wouldn’t be a puzzle. These simple approaches don’t work for logical reasons specific to the current situation, very much in the same way as the Obvious Plan.

In a satisfying puzzle, you should have to solve it with the creative approach, because the simple approaches don’t work. Not because the designer arbitrarily forced a specific solution.

1. **Example 1, Enter the gas station**: The player can attempt to kick down the door—a tactic that worked on previous doors—but this particular door proves too sturdy.
2. **Example 2, The gas tower**: If the player attempts to climb the ladder while the guards are patrolling, they will inevitably spot them.
3. **Example 3, The trailer**: When the guy is not by the door, the player can kick the door open and enter the trailer. But neither the guy nor the torch is there.
4. **Example 4, The junkyard**: The player can try to lock the chain in the open position, but there is noting to tie or hold the chain in a position that keeps the gate open.

### **Why It Fails**:

The Bad Plan doesn’t work because the puzzle’s solution isn’t the obvious one. However, the reason for the bad plan’s failure must be logical and provide a clear, satisfying explanation. The player doesn’t know the Bad Plan is bad until they try it.

Nothing is more frustrating than an “I can’t do that” generic response when you are trying to do something that makes sense. So, the reasons that the Bad Plans fail should be explicitly explained to the player. After all, they are reasonable solutions, just not the ones we want. In order to keep the designer’s hands invisible, we should do our best to present logical explanations for why the player’s attempts keep failing.

Puzzle games are logic games. Logic is what the player wants from this type of games. Logic is your mantra.

1. **Example 1, Enter the gas station**: The player can kick the door, but this one is too strong and sturdy. It won’t open using force, and Ben states it out loud.
2. **Example 2, The gas tower**: The guards always see the player character climbing the ladder, and there is no way to stop the alarm from triggering.
3. **Example 3, The trailer**: If the player kicks the trailer’s door open while the guy is not by the door, neither he nor the torch are there. There appears to be a secret door to a basement somewhere in the trailer, but the player can’t see its location.
4. **Example 4, The junkyard**: There is no way to keep the chain in the open position. Every time the player lets go of it, it returns to the closed position, closing the main gate.

### **Good Plan**:

![](full-throttle-3.jpg)

The actual solution to the puzzle requires creative thinking that logically fits the situation, considering the character’s available tools, the provided hint, and the reasons why the previos attempts failed.

I like to think of this as “Hint + Bad Plan”. Why can this particular locked door only be opened in this specific way? When you find the solution, it should feel obvious and inevitable. Like a good twist. And like a good twist, for it to work, you need to foreshadow it. The Hint after the Obstacle helps with that feeling of “I should’ve seen it from the start.”

Solving the puzzle means overcoming the Obstacle. It’s important to differentiate between the Objective and the Obstacle. The Objective is what the player wants to get or achieve. The Obstacle is what’s in their way, and what solving the puzzle removes.

1. **Example 1, Enter the gas station**: The player’s goal is stated as: find a way across the barrier to reach the gas. But the only door is locked with a padlock and it can’t be forced open. The hint tells the player to find a way to unlock the padlock as the solution. Somewhere else int the game, the player can find a lockpick. Using the lockpick to unlock the padlock solves the puzzle.
2. **Example 2, The gas tower**:The player needs gas, not to climb the tower. So instead of trying to climb the ladder, they must steal gas from the guards’ vehicle while they are distracted searching for him . _(I found that this misdirection of Obstacle happens a few times in this game. The game makes you think that what you need to do to get the Objective is one thing, when the solution is that you need to do another.)_
3. **Example 3, The trailer**: The player must kick the door open while the guy is by the door. When this happens, the door hits him in the face, leaving him unconscious.
4. **Example 4, The junkyard**: If the player puts a padlock on the main gate, it can’t be opened. When they pull the chain, it doesn’t move (since the gate’s motion is connected to the chain’s motion). This transforms the chain—which previously moved downward when pulled—into a sturdy climbing rope that allows Ben to scale the junkyard’s wall.

### **Success**:

The final outcome that occurs when the player correctly solves the puzzle, allowing them to progress in the game. The success state should feel like a natural consequence of the player’s actions and provide clear feedback that the puzzle has been completed.

When players solve the puzzle, they overcome the Obstacle. But we’re here for the Objective. Once the Obstacle is cleared, that goal finally comes within reach. But this doesn’t mean they get it. If the puzzle is simple, yes, they get the Objective and the story moves forward. But if it’s a complex puzzle, solving the puzzle moves the player to a next stage. (Examples 1 and 2 are two stages of the same puzzle: “get gas for the motorcycle.”)

1. **Example 1, Enter the gas station**: By unlocking the padlock, the player gains access through the barrier and reaches the gas tower.
2. **Example 2, The gas tower**: The player has the gas they need to fix their motorcycle.
3. **Example 3, The trailer**: The player enters the trailer and finds the guy unconscious and the secret door to the basement open. He can go down and get the torch that is there.
4. **Example 4, The junkyard**: The player successfully enters the junkyard by climbing over the wall instead of using the main gate (which leads to a new puzzle).

## Final Thoughts

![](full-throttle-4.jpg)

One thing I’ve noticed is that the distance between Obstacle and Success is fairly short. There’s usually one or two things that need to be done for the character to achieve their goal.

Multi-step puzzles are broken down using sub-goals. In the section in question here, Ben’s goal is to fix his motorcycle. But the game splits this into 3 simpler goals: get gas, a fork, and a torch. And each quest is rather short, comprising of a handful of steps. (When you know the solution, you can breeze through most puzzles with very few clicks.)

It’s also unusual for puzzles to require the player to travel far from the room or region where the puzzle is located. Most of what you need is in the immediate vicinity (within reason) of the puzzle. Making players collect an item at the start of the game to use it at the end has proven to be an unwise design choice. I don’t know about you, but I’ve found that I’ve solved puzzles that do that when I’m in the frustrated state of rubbing every inventory item against each other. Solving a puzzle through random trial and error isn’t satisfying.

## Conclusion

I don’t know if Tim Schafer and his team used this structure on purpose. Maybe the one designer tasked with the puzzles of this section followed these steps intuitively. I haven’t found any documentation that LucasArts had any template that hints at them using something like the 10 steps above. And admittedly, some of the points I had to stretch the presented information to make all puzzles fit.

But my goal was not to find the way LucasArts did it. It was to study what they did to find a way that works for me—a guide on how to do it, how to write compelling puzzles for point and click adventure games. And in that regard, I think I succeeded. In implementing, I found that the structure might need tweaks, but I find it works well enough as it is. And it fits very well with the narrative structure of a dramatic scene, which is a plus.

If I ever enable comments on this post, do let me know if it works for you.