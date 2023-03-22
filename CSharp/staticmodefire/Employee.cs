using System;

namespace staticmodefire
{
    public class Employee
    {
        private string name;
        private static int couner;

        public Employee(string name){
            
            this.name=name;
            couner++;

        }


public void mployeeNumber(){

System.Console.WriteLine(couner);

}

    }
}