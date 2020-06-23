//https://datatables.net/

// js
<script type="text/javascript" charset="utf8" src="https://cdn.datatables.net/1.10.21/js/jquery.dataTables.js"></script>

// styles (not really need it to add these styles)
<link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.10.21/css/jquery.dataTables.css">


<script>
   $(document).ready(function() {
        $('#eventsTable').DataTable({
            paging: false,
            scrollY: 500,
            searching: false,
            order: [[0, 'desc']]
        });
    });

</script>