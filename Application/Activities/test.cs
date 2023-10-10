using System;
using System.Threading.Tasks;

class Program
{
    static async Task Main(string[] args)
    {
        Console.WriteLine("Main thread started.");
        // Start a new task asynchronously
        Task<int> resultTask = DoSomeAsyncWork();

        // You can do other work here while waiting for the task to complete
        Console.WriteLine("Main thread continues doing other work.");

        // Wait for the task to complete and get the result
        int result = await resultTask;

        Console.WriteLine($"Result from async operation: {result}");
        
        Console.WriteLine("Main thread finished.");
    }

    static async Task<int> DoSomeAsyncWork()
    {
        Console.WriteLine("Async work started.");
        
        // Simulate some asynchronous work
        await Task.Delay(2000);

        Console.WriteLine("Async work completed.");

        // Return a result
        return 42;
    }
}