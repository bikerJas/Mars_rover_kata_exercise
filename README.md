# Mars_rover_kata_exercise

## Introduction

This repo demostrates how robots can be navigated on the surface of Mars so they can use their special cameras
and robot arms to collect samples from the surface of Mars to bring back to Earth.

For this exercise, it is assumed that the surface of Mars is a plateau and therefore can be represented as a 
rectangular grid.

## Key Features

A Rover's position on the plateau is represented by an x and y co-ordinate and a letter to represent the direction 
they are facing, i.e. (0,0,N) would mean the Rover is at the bottom left of the plateau, facing North.

A Rover is sent instructions to move around the plateau by being sent a string of letters which have the following 
meaning:-

Letter  ¦   Action
--------¦----------
L   ¦   Spins the Rover 90 degrees Left from it's current orientation
R   ¦   Spins the Rover 90 degress Right from it's current orientation
M   ¦   Moves the Rover forward by one grid position in the current orientation

## Approaches

I started off by validating all possible issues that can arise with the supplied data, such as an empty file, invalid
plateau coordinates, missing plateau coordinates.  If data was valid, then the plateau corodinates were saved to check against each rover movements beyond the boundary of the plateau.

For each rover, I validated the rover starting coordinates and the rover instructions for turning and moving.  Movement beyond the boundary of the plateau area was validated.  If all data was valid, then the first rover was moved to its new location and a record was kept of this new location.  All movement of additional rovers was valided against plateau dimensions and clashes with existing rovers.


