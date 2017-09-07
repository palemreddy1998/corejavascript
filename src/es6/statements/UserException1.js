function UserException(message){
    this.message=message;
    this.name="UserException";
    return this.message+this.name;
}
try{
    throw new UserException("I don't like it");
}catch (e){
    console.log(e);
}