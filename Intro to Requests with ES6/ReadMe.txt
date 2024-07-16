JavaScript uses an event loop to handle asynchronous function calls. 
When a program is run, function calls are made and added to a stack. 
The functions that make requests that need to wait for servers to respond 
then get sent to a separate queue. Once the stack has cleared, then the 
functions in the queue are executed