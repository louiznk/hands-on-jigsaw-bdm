open module org.zenika.handson.jigsaw.http {
    requires java.logging;
    requires org.zenika.handson.jigsaw.api;
    requires vertx.core;
    requires vertx.web;
    uses org.zenika.handson.jigsaw.api.CharactersApi;

}
