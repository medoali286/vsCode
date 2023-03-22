class User {
  int _id;
  String _name;

  User({int id = 0, String name = ""})
      : _id = id,
        _name = name {
    this._id = id;
    this._name = name;
  }

  getID() {
    return _id;
  }

  setId(int id) {
    _id = id;
  }

  @override
  String toString() {
    return "id : $_id , name : $_name";
  }
}
