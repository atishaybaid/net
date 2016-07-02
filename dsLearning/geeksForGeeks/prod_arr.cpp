#include<iostream>
using namespace std;


int main(){
  int arr[5] = {10,3,5,6,2};
  int leftProd[5];
  int rightProd[5];
  int prod[5];
  leftProd[0] = 1;
  
  
  for(int i = 1;i<5;i++){
      leftProd[i] = leftProd[i-1]*arr[i];
      cout<<leftProd[i]<<endl;
  };
  
  
  rightProd[4] = 1;
  for(int j=3;j>=0;j--){
      rightProd[j] = rightProd[j+1]*arr[j];
       cout<<rightProd[j]<<endl;
  };
  
  for(int k = 0;k<5;k++){
      prod[k] = leftProd[k]*rightProd[k];
      cout<<prod[k]<<endl;
  };
  
      
    
}