import React, { Component, HTMLAttributes, useCallback, useEffect, useRef, useState } from 'react';

import JSONEditor, { JSONEditorOptions } from 'jsoneditor';
import 'jsoneditor/dist/jsoneditor.css';

import './JSONEditorDemo.css';

type JSONEditorDemoProps = {
    json: any;
    onChangeJSON: (json: any) => void;
}

export default function JSONEditorDemo({json, onChangeJSON} : JSONEditorDemoProps) {
    const options: JSONEditorOptions = {
        mode: 'tree',
        onChangeJSON: onChangeJSON
    };

    const editor = useRef<JSONEditor>();
    const setRef = useCallback((ref: HTMLDivElement | null) => {
        if (ref) {
            editor.current = new JSONEditor(ref, options, json);
        } else {
            editor.current?.destroy();
        }
    }, []);

    useEffect(() => {
        editor.current?.update(json);
    }, [json]);

    return (
        <div ref={setRef} className="jsoneditor-react-container" />
    );
}
