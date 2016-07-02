#include<iostream>
using namespace std;

int main(){
    int T,M,N,localCounter,collins;
    cin>>T;
    
    while(T>0){
        int arr[10][10] ={0};
        collins = 0;
        T--;
        cin>>M;
        cin>>N;
        for(int i=0;i<M;i++){
            for(int j=0;j<N;j++){
                cin>>arr[j][i];
            };
        };
        
        /* for(int i=0;i<M;i++){
            for(int j=0;j<N;j++){
                cout<<arr[j][i]<<" ";
            };
            cout<<endl;
            
        };
        */
        
        for(int i=0;i<N;i++){
             localCounter = 0;
            for(int j=0;j<M;j++){
                if(arr[j][i]){
                    localCounter++;
                }
            };
            collins = collins + localCounter*(localCounter-1)/2;
        };
        
        cout<<collins<<endl;
        
    };
    
    
}