{
    "targets": [
        {
            "target_name": "MyAsyncBinding",
            "sources": ["MyAsyncBinding.cc"],
            "include_dirs" : [
            "<!(node -e \"require('nan')\")"],
            "libraries": [ "C:\wamp64\www\project2\pskernel.lib",
                "C:\wamp64\www\project2\build\Release\MyAsyncBinding.lib"
            ],
        }
    ],

}
