

import 'users.dart';

main(){
User user=User(id: 5,name: "mohamed");


print(user);
print(user.getID());
user.setId(10);
print(user.getID());


}


