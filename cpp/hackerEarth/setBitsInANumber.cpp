#include<iostream>
#include<string>

using namespace std;

string converToBinary(int num){
    string binaryNumber;
    int binaryDigit;
    binaryDigit=0;
     while(num>0){
       binaryDigit = num%2;
       binaryNumber = to_string(binaryDigit) + binaryNumber;
       num = num/2;      
   }
   
   int numberOfBits(int input){
       int count = 0;
       int num1;
       int num2;
       num1 = input;
       num2 = input-1;
       
       while(num1!=0){
       num1 =  (converToBinary(num1) &&  converToBinary(num2)
       count++;
       num2 = num1-1;  
       }
       
       return count;
   }
   
   
   
   return binaryNumber; 
}

int main(){
   int t,n;
   cin>>t;
   
   while(t--){
       cin>>n;
       numberOfBits(n);
       
       
       
       
       
   }
    
    
    
}