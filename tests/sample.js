var chai = require('chai');
var expect = chai.expect;
var $ = require('jquery');
var hello = require('../app/scripts/index').hello;

describe('hello', function(){
  it('should say hello', function(){
    expect(hello()).to.be.equal('hello world');
  });
});
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
