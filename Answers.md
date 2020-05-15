1. What problem does the context API help solve?
context api solves the souloution of smaller scale state management,
by eliminating the need for "prop drilling"

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
actions are objects that are sent to the reducer to carry out some sort of 
effect on the state, the store is a place where all of that stuff lives, the state, actions, and reducers. sending an action to the reducer will affects the store!

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?
application state is your global state, a state that is used by more than one component inside of your application. component state is local state to your component, possibly something like a fourm value!!

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
redux thunk is a type of middleware that allows you to write async actions and dispatch those to your reducer.

1. What is your favorite state management system you've learned and this sprint? Please explain why!

I like redux, personally I can see myself using both ContextAPI and Redux of future projects, context for smaller scale prototyping and projects and redux for the biggerstuff combined with some contextAPI so I don't drive myself crazy. I like redux because when using the action system, my brain can work out easier what sending A to B should return in the case of xyz!
