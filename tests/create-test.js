var expect = chai.expect;

describe('hello', function(){
  it('should trigger a create:post event on the document with the title and body', function(){
    $(document).on('posts:fetched',function(){
      expect(posts = [{title: "Title", body: "Body"}]);
      done();
      $('.input-class-name').val("Title");
      $(form-button).click(function(){
      return posts;
    });

  });
});
});
