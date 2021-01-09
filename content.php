<div class="container">
    <div class="row">
        <div class="col-md-12">
            <div class="panel panel-info">
                <div class="panel-heading">Image Filter</div>
                <div class="panel-wrapper collapse in" aria-expanded="true">
                    <div class="panel-body">

                        <form class="form-horizontal" action="" enctype="multipart/form-data" method="post">
                            <div class="form-group">
                                <div class="col-sm-12">
                                    <div class="fileinput fileinput-new input-group" data-provides="fileinput">
                                        <div class="form-control" data-trigger="fileinput"> <i class="glyphicon glyphicon-file fileinput-exists"></i> <span class="fileinput-filename"></span></div> <span class="input-group-addon btn btn-default btn-file"> <span class="fileinput-new">Select file</span> <span class="fileinput-exists">Change</span>
                                            <input id="image-up" name="image" type="file" accept="image/*" onchange="original()"> </span> <a href="#" class="input-group-addon btn btn-default fileinput-exists" data-dismiss="fileinput">Remove</a>

                                    </div>
                                </div>
                            </div>

                            <div class="col-sm-6 ol-md-6 col-xs-12">
                                <img id="ori-image" width="500">
                            </div>
                            <div class="col-sm-6">
                                <div class="white-box">

                                    <div class="table-responsive">
                                        <table class="table color-table inverse-table">
                                            <thead>
                                                <tr>
                                                    <th>Smoothing Mean</th>
                                                    <th>Smoothing Median</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td><img id="mean-image" width="200"></td>
                                                    <td><img id="median-image" width="200"></td>
                                                </tr>
                                                <tr>
                                                    <td id="error1"></td>
                                                    <td id="error2"></td>
                                                </tr>
                                            </tbody>
                                            <thead>
                                                <tr>
                                                    <th>Smoothing Modus</th>
                                                    <th>Konvolusi Gauss</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td><img id="modus-image" width="200"></td>
                                                    <td><img id="gauss-image" width="200"></td>
                                                </tr>
                                                <tr>
                                                    <td id="error3"></td>
                                                    <td id="error4"></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                    </div>
                    <!-- <?php $_POST['tes'] = 1; ?> -->
                </div>
                <!-- <?= var_dump($_POST); ?> -->
            </div>

            </form>
        </div>
    </div>

</div>