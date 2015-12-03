<div class="row">
    <div class="col-md-4">
        <h2>Conversations</h2>
        <div id="summary"></div>
    </div>

    <div class="col-md-8">
    <?php if($id) : ?>
        <div id="thread" 
            data-thread-id="<?= $id ?>"
            data-thread-users="Conversation">
        </div>
        <div id="loading-messages">
            <h2>Loading</h2>
            <hr>
        </div>
    <?php else : ?>
        <div id="no-messages">
            <h2>Your inbox is empty</h2>
            <hr>
            <div class="well text-center">
                <p>Your don't have any messages at the moment.</p>
                <?= $this->Html->link(
                    'New Message', 
                    ['controller' => 'threads', 'action' => 'add'],
                    ['class' => 'btn btn-primary']
                ) ?>
            </div>
        </div>
    <?php endif ?>
    </div>

</div>

<?php $this->Require->module('chat/loadThread') ?>
<?php $this->Require->module('chat/loadSummary') ?>
