/**
 * Created by Aypar on 13.3.2016.
 */


module content {
    class Content
    {
        name:string;
        type:ContentType;
        parent:Content;
        children:Array<Content>;
        getDataSource: DataSource;
        postDataSource:DataSource;
        items:Array<Item>;
    }
}
