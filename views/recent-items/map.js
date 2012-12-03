function(doc) {
  
      emit(doc.created_at, {
          id : doc._id,
          title: doc.title,
          url : doc.url,
          author: doc.author,
          homepage_url : doc.homepage_url,
          description : doc.description,
          tags : doc.tags
      });
  
}

