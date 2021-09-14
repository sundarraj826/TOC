$(document).ready(function() {
    $('#example').DataTable({
        "searching": false,
        "pageLength": 10,
        "dom": '<"top">rt<"bottom"iflp>',
        "ordering": false,
        language: {
            paginate: {
              next: '&#8594;', // or '→'
              previous: '&#8592;'
            }
          },
          oLanguage: {
            "sLengthMenu": "Show _MENU_",
            "sInfo": "_START_ to _END_ of _TOTAL_",
         }
        
    });
} );