
List<string> list = new List<string>();


list.Add("Hello");
list.Add("World");


foreach (string x in list)
{
  Console.WriteLine(x);
}


Console.WriteLine(String.Join(", ", list));

Console.WriteLine($"Count: {list.Count}");

list.Clear();

Console.WriteLine($"Count: {list.Count}");


list.Add("A");
list.Add("B");
list.Add("C");
list.Add("D");

list.Remove("B");

Console.WriteLine(String.Join(", ", list));
