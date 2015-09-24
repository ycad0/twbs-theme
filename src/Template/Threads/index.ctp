<div class="container">

    <div class="row">

        <div class="col-md-8">
            <div id="thread" 
                data-thread-id="<?= $id ?>"
                data-thread-title="loading"
                data-thread-users="Conversation">
            </div>
        </div>

        <div class="col-md-4">
            <h2>Conversations</h2>
            <hr>
            <div id="summary"></div>
        </div>

    </div>
</div>
<?php $this->Require->module('chat/load') ?>
