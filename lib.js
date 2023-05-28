function echo(msg){
    console.log(msg);
}
function add(n1, n2){
    console.log(n1+n2);
}
// export default 資料;
/*
let obj={
    echo:echo,
    add:add
};
export default obj;
*/
export default {
    echo:echo,
    add:add
};