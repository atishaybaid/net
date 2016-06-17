#include<iostream>
using namespace std;
 
int localInversios(int arr[100]){
    int lcount=0;
    int i = 0;
    for(i=0;i<99;i++){
        if(arr[i]>arr[i+1] && arr[i+1]!=0){
            lcount++;
        }
        
    }
    
 
    
    return lcount;
    
}
 
int globalInversions(int arr[100]){
    int j,k,gcount = 0;
    for(j=0;j<99;j++){
        for(k=j+1;k<100;k++){
            if(arr[j]>arr[k] && arr[k]!=0){
                gcount++;
            }
        }
    }
   
    return gcount;
}
 
int main(){
int arr [100] = {};
int T,N,l,g;
int i = 0;
 
cin>>T;
while(T>0){
    T--;
  for(i=0;i<100;i++){
      arr[i]=0;
  }
    cin>>N;
    for(i=0;i<N;i++){
        cin>>arr[i];
    };
    
    l = localInversios(arr); 
    g = globalInversions(arr);
    if(l==g){
        cout<<"YES";
    } else{
         cout<<"NO";
    }
 
}
 
 
 
/*
l = localInversios(arr); 
g = globalInversions(arr);
cout<<l<<endl<<g;
*/
   
    
}
 