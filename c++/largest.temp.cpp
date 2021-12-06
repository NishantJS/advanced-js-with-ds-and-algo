#include<iostream>
using namespace std;

template <typename type>

type getLargest(type first, type second){
  // first>second?return first:return second;
  return first>second? first:second;
}

int main(){
  cout<<""<<getLargest<int>(79,21)<<endl;
  cout<<""<<getLargest<double>(7.9,21)<<endl;
  cout<<""<<getLargest<char>('n','b')<<endl;
}