#include<iostream>
using namespace std;



int main(){
   int a,b,result,ld,nresult;
   cin>>a;
   cin>>b;
   
 result = a-b;
 ld = result%10;
 
 if(ld!=9){
     nresult = result+1;
 } else{
     nresult = result-1;
 }
 
 cout<<nresult;
   
 
   
}