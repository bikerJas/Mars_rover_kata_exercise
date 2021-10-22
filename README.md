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

Letter      Action
L           Spins the Rover 90 degrees Left from it's current orientation
R           Spins the Rover 90 degress Right from it's current orientation
M           Moves the Rover forward by one grid position in the current orientation
