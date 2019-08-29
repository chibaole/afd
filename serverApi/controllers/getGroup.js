
module.exports = async (ctx) => {
    let groupList = [
        {
            pic: 'http://pbmrxkahq.bkt.clouddn.com/group_pj1.png',
            text: '限时闪购|真诚的凤梨酥',
            groupPrice: 5,
            price: 10

        },
        {
            pic: 'http://pbmrxkahq.bkt.clouddn.com/group2.png',
            text: '限时闪购|真诚的小麻花',
            groupPrice: 8,
            price: 20

        },
        {
            pic: 'http://pbmrxkahq.bkt.clouddn.com/group3.png',
            text: '限时闪购|真诚的花生',
            groupPrice: 10,
            price: 19

        }
    ]

  // if (openid) {
  //   // 根据opid过滤
  //   books = await mysqlSelect.where('books.openid', openid)
  // } else {
  //   // 全部图书 分页
  //   books = await mysqlSelect.limit(size).offset(Number(page) * size)
  // }
  // // .orderBy('id','desc')
    ctx.state.data = {
        groupList: groupList
    }
}
