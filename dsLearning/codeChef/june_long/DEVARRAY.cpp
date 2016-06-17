#include<iostream>
#include<string>
using namespace std;

/*
long long getMin(long long arr[100000], long  N){
long long min = arr[0];
    for(long int i = 0;i<N;i++){
        if(min>arr[i]){
            min = arr[i];
        }
    }
   return min;
};

*/


/*

long long getMax(long long arr[100000], long N){
long long max = arr[0];
    for(long i = 0;i<N;i++){
        if(max < arr[i]){
            max = arr[i];
        }
    }
   return max;
};

*/

int main(){
    long  Q,N;
    long long  min,max;
    long long  arr[100000];
    long long  query[100000];
    string result[100000];
    cin>>N;
    cin>>Q;
   
    
   
   for(int i=0;i<N;i++){
       cin>>arr[i];
       if(i==0){
         min = max = arr[0];  
       }
        if(min>arr[i]){
            min = arr[i];
        };
         if(max < arr[i]){
            max = arr[i];
        }
   }
   
    for(int i=0;i<Q;i++){
       
       cin>>query[i];
       
       if(min<=query[i] && query[i]<=max){
            result[i]="YES";
        } else{
         result[i]="NO";  
        }
   }
   
   
  
   
    
     for(long  i =0;i<Q;i++){
    cout<<result[i]<<endl;
  };
    
   
  
   
 
    
}