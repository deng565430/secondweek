describe('测试点赞加一的组件', function() {
    // 测试点赞组件前9次是否是正确
   for(var i = 0; i < 10; i++) {
      (function(i){
        it('测试Thumb点击事件', function() {
            expect(thumb.clickTenTimes()).toBe(true);
        });
        if (i === 9) {
          it('测试Thumb点击事件', function() {
            expect(thumb.clickTenTimes()).toBe(false);
          });
        }
      })(i)
    }
});