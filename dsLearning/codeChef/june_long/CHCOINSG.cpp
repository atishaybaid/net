#include<iostream>
using namespace std;

int main(){
    int T;
    cin>>T;
    while(T>0){
        T--;
        long long int N;
        cin>>N;
        if(N%6==0){
            cout<<"Misha"<<endl;
        } else{
             cout<<"Chef"<<endl;
        }
    }
}